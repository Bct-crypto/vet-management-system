"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Navbar as DashNavbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@/components/Material";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  CalendarDaysIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon as UserCircle,
} from "@heroicons/react/24/outline";

import { useLayoutContext } from "@/contexts/layout-context";

const Navbar = () => {
  const {
    state: { fixedNavbar, openSidenav },
    dispatch,
  } = useLayoutContext();
  const pathname = usePathname();
  const currentPage = pathname
    .split("/")
    .filter((el) => el !== "dashboard" && el !== "");
  return (
    <DashNavbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex justify-between gap-6 items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link href={"/dashboard"}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                Dashboard
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {currentPage}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {currentPage.length > 0 ? currentPage : "Home"}
          </Typography>
        </div>
        <div className="flex items-center">
          {/* <div className="mr-auto md:mr-4 md:w-56">
            <Input crossOrigin={""} label="Search" />
          </div> */}
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() =>
              dispatch({ type: "OPEN_SIDENAV", payload: !openSidenav })
            }
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <UserCircleIcon className="block h-6 w-6 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center gap-2">
                <UserCircle className="h-5 w-5" />
                <Typography
                  as={Link}
                  href="/dashboard/profile"
                  variant="small"
                  className="font-normal"
                >
                  My Profile
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                <CalendarDaysIcon className="h-5 w-5" />
                <Typography
                  as={Link}
                  href="/dashboard/appointments"
                  variant="small"
                  className="font-normal"
                >
                  My Appointments
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                <InboxArrowDownIcon className="h-5 w-5" />
                <Typography
                  as={Link}
                  href="/dashboard/notifications"
                  variant="small"
                  className="font-normal"
                >
                  Inbox
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                <LifebuoyIcon className="h-5 w-5" />
                <Typography
                  as={Link}
                  href="#!"
                  variant="small"
                  className="font-normal"
                >
                  Help
                </Typography>
              </MenuItem>
              <hr className="my-2 border-blue-gray-50" />
              <MenuItem
                className="flex items-center gap-2 focus:bg-red-400 focus:text-white"
                onClick={() => signOut()}
              >
                <PowerIcon className="h-5 w-5" />
                <Typography variant="small" className="font-normal">
                  Sign Out
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>

          <IconButton
            variant="text"
            color="blue-gray"
            className="hidden sm:block"
            onClick={() =>
              dispatch({ type: "OPEN_CONFIGURATOR", payload: true })
            }
          >
            <Cog6ToothIcon className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-6 w-6 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New message</strong> from Laur
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New album</strong> by Travis Scott
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                  <CreditCardIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    Payment successfully completed
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </DashNavbar>
  );
};

export default Navbar;
