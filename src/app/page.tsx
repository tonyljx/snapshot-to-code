import FrontSelector from "@/components/ui-tony/FrontSelector";
import ImageUploader from "@/components/ui-tony/ImageUploader";
import RenderHTML from "@/components/ui-tony/RenderHTML";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="px-3 py-2">
      <h1 className="text-3xl mt-3 font-bold mb-8 text-center">
        Upload Your Image 🤙
      </h1>

      <div className="grid grid-cols-2 gap-3 min-h-screen p-10">
        <div className="w-full flex flex-col gap-6">
          <ImageUploader />
        </div>
        <RenderHTML />
      </div>

      <Toaster />
    </main>
  );
}
