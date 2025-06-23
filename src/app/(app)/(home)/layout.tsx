import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Category } from '@/payload-types';

import { Navbar } from "./navbar"; 
import { Footer } from "./footer";
import { SearchFilters } from "./search-filters";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = async ({children}: LayoutProps) => {
    const payload = await getPayload({
       config: configPromise,
      });

    const data = await payload.find({
        collection: 'categories',
        pagination: false,
        depth: 1, // Populates the children/subcategory, subcategories[0] will be a type of Category
        where: {
        parent: {
            exists: false
        }
        }
    });

    const formattedData = data.docs.map((doc) => ({
        ...doc,
        subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
            // Because of 'depth: 1' we are sure that the 'doc' is a type of Category
            ...(doc as Category),
        }))
    }));

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SearchFilters data={formattedData}/> 
            <div className="flex-1 bg-amber-50">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;