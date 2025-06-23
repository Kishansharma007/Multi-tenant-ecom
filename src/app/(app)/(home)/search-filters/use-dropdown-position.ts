import { RefObject } from "react";

export const useDropdownPosition = (
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
    const getDropdownPosition = () => {
        if(!ref.current) return{ top: 0, left: 0 };

        const rect = ref.current.getBoundingClientRect();
        const dropDownWidth = 240; //width of the dropdown (w-60 = 15rem = 240px)

        //Calculate the initial position of the dropdown
        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        //Check if dropdown would go off the screen(viewport) on the right

        if(left + dropDownWidth > window.innerWidth) {
            left = rect.right + window.scrollX - dropDownWidth;

            //If still off screen, align the edge of the viewport with some padding
            if(left < 0) {
                left = window.innerWidth - dropDownWidth - 16; //padding = 16px
            }
        }

        //Ensure dropdown doesn't go off left edge
         if(left < 0) {
            left = 16;
        }

        return { top, left }; 
    };

    return { getDropdownPosition };
}; 