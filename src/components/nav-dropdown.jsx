import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { signOut } from "next-auth/react"
import { IconLogout } from "@tabler/icons-react"

export function NavDropDown({ user }) {

    function userLogOut() {
        signOut()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9 rounded-full">
                    <AvatarImage className='object-cover object-center' src={user.image} alt={user.name} />
                    <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        {user.name}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => { userLogOut() }}>
                    <IconLogout />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
