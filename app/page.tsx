import Image from "next/image";
import HeaderNavigation from "./shared/components/navbar";
import SocialMediaApp from "./shared/components/social-media-page";

export default function Home() {
  return (
   <div className="bg-gray-50 min-h-screen">
   <HeaderNavigation />
   <SocialMediaApp />
   </div>
  );
}
