'use client';
import { BookOpenText, UserRound, CircleX, AlignJustify, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Link from "next/link";
import { useContext, useState } from "react";
import { ActiveContext } from "@/context/ActiveProvider";

const Header = () => {
  const { isActive, toggleHamburger } = useContext(ActiveContext);
  const [isSettingOn, setIsSettingOn] = useState(false);

  const handleSetting = () => {
    console.log(isSettingOn);
    setIsSettingOn(!isSettingOn);
  };

  return (
    <header className="h-24">
      <div className="border-b bg-white text-black fixed top-0 w-full z-50">
        <div className="h-24 flex items-center justify-between gap-2 px-4 md:px-8 ">
          <div className="nav-control lg:hidden">
            <div onClick={toggleHamburger} className={`${isActive ? 'hamburger active' : 'hamburger'}`}>
              {!isActive ? <AlignJustify /> : <X />}
            </div>
          </div>
          <Link href="/">
            <div className="flex items-center gap-2">
              <BookOpenText className="text-primary size-10 sm:size-12" />
              <div>
                <h1 className="text-lg sm:text-2xl font-semibold">Dashboard</h1>
                <p className="text-[12px] sm:text-sm">Student Management</p>
              </div>
            </div>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <UserRound />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <h1 onClick={handleSetting}>Setting</h1>
              </DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {
        isSettingOn && <div className=" z-50 bg-black/20 fixed top-0 left-0  h-screen right-0 flex items-center justify-center">
          <Tabs defaultValue="account" className="w-[400px] relative" >
            <CircleX className="right-0 absolute -top-10" onClick={handleSetting} />
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    {` Make changes to your account here. Click save when you're done.`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    {`Change your password here. After saving, you'll be logged out.`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          isSettingOn && </div>
      }
    </header>
  );
};

export default Header;
