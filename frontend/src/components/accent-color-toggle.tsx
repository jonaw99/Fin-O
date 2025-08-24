import {useColorTheme} from "@/components/color-theme-provider"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"

export function AccentColorToggle() {
    const {setColorTheme, colorTheme} = useColorTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Accent: {colorTheme}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setColorTheme("default")}>Default</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("red")}>Red</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("rose")}>Rose</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("orange")}>Orange</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("green")}>Green</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("blue")}>Blue</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("yellow")}>Yellow</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("violet")}>Violet</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}