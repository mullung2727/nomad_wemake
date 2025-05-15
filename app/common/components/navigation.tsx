import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BarChart3Icon, BellIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon } from "lucide-react";

const menus = [
  {
    name: "Products",
    to:"/products",
    items: [
      {
        name: "Leaderboard",
        description: "See the top per categories in your community",
        to: "/products/leaderboard",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Submit a Product",
        description: "Submit a product to our community",
        to: "/products/submit",
      },
      {
        name: "Promote a Product",
        description: "Promote a product to the community",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "Find remote jobs",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "Find full-time jobs",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "Find freelance jobs",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "Find internships",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit a Job",
        description: "Submit a job to our community",
        to: "/jobs/submit",
      },
    ]
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts from the community",
        to: "/community/posts",
      },
      {
        name: "Top Posts",
        description: "See the top posts from the community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the latest posts from the community",
        to: "/community?sort=new",
      },
      {
        name: "Submit a Post",
        description: "Submit a post to the community",
        to: "/community/submit",
      },
    ]
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams from the community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team to collaborate with others",
        to: "/teams/create",
      },
    ]
  },
  
]
export const Navigation = ({
  isLoggedIn, hasNoti, hasMsg
}: {
  isLoggedIn: boolean;
  hasNoti: boolean;
  hasMsg: boolean;
}) => {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
        <div className="flex items-center ">
            <Link to="/" className="font-bold tracking-tighter text-lg">
              WeMake
            </Link>
            <Separator orientation="vertical" className="h-6 mx-4"/>
            <NavigationMenu>
              <NavigationMenuList>
                {menus.map((menu) => (
                  <NavigationMenuItem key={menu.name}>
                    {menu.items ? 
                    <>
                      <Link to={menu.to}>
                        <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                          {menu.items?.map((item) => (
                            <NavigationMenuItem 
                              key={item.name} 
                              className={cn([
                                "select-none rounded-md transition-colors hover:bg-accent focus:bg-accent",
                                item.to === "/products/promote" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                item.to === "/jobs/submit" && "col-span-2 bg-primary/10 hover:bg-primary/100 focus:bg-primary/20",
                              ])}
                            >
                              <NavigationMenuLink asChild>
                                <Link 
                                  className="p-3 space-y-1 block leading-none no-underrline outline-none"
                                  to={item.to}>
                                  
                                  <span className="text-sm font-medium leading-none">{item.name}</span>
                                  <p className="text-sm text-muted-foreground">{item.description}</p>
                                </Link>
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>: <Link className={navigationMenuTriggerStyle()} to={menu.to} >{menu.name}</Link>
                    }
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
        </div>

        {isLoggedIn ? ( 
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild className="relative">
                <Link to="/my/notifications">
                  <BellIcon className="size-4" />
                  {hasNoti && (
                    <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full"></div>
                  )}
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="relative">
                <Link to="/my/messages">
                  <MessageCircleIcon className="size-4" />
                  {hasMsg && (
                    <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full"></div>
                  )}
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/mullung2727.png" />
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel className="flex flex-col">
                    <span className="font-medium">Mullung</span>
                    <span className="text-xs text-muted-foreground">
                      @username
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/my/profile">
                        <BarChart3Icon className="size-4 mr-2" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/my/profile">
                        <UserIcon className="size-4 mr-2" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/my/settings">
                        <SettingsIcon className="size-4 mr-2" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/logout">
                      <LogOutIcon className="size-4 mr-2" />
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
          <div className="flex items-center gap-4">
            <Button asChild variant="secondary">
              <Link to="/auth/login">Login</Link>
            </Button>
            <Button asChild variant="default">
              <Link to="/auth/join">Join</Link>
            </Button>
          </div>
        )}
    </nav>
  );
};
