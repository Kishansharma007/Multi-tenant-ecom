import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return(
    <div className="flex flex-col gap-y-4 p-4">
      <div>
        <Button variant="elevated">Hello World!</Button>
      </div>
      <div>
        <Input placeholder="Type something..." />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="Type something..." />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  )
}
