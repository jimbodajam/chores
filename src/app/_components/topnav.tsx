import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
        <div>
          Chores
        </div>
  
        <div>
            <SignedOut><SignInButton /></SignedOut>
            <SignedIn><UserButton /></SignedIn>
        </div>
  
      </nav>
    )
  }
  