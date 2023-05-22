import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
   
  export default function Example() {
    return (
      <div className="relative h-5/6 w-full">
        <div className="absolute bottom-0 right-0">
          <SpeedDial placement="left">
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full flex items-center bg-neutral-950">
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent className="flex-row">
              <SpeedDialAction className="h-16 w-16 m-2 bg-neutral-500">
                <HomeIcon className="h-5 w-5" />
                <Typography color="blue-gray" className="text-xs font-normal">
                  Home
                </Typography>
              </SpeedDialAction>
              <SpeedDialAction className="h-16 w-16 m-2 bg-neutral-500">
                <CogIcon className="h-5 w-5" />
                <Typography color="blue-gray" className="text-xs font-normal">
                  Contact
                </Typography>
              </SpeedDialAction>
              <SpeedDialAction className="h-16 w-16 m-2 bg-neutral-500">
                <Square3Stack3DIcon className="h-5 w-5" />
                <Typography color="blue-gray" className="text-xs font-normal">
                  ChatBot
                </Typography>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    );
  }
