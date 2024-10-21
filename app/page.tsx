import HomeForm from "@/component/Form";
import Image from "next/image";
import image_principal from "@/public/photo 2.jpeg";

export default function Home() {
  return (
    <main className="bg-[#e8e9e9]">
      <Image src={image_principal} alt="Deborah Pasu" className="" />
      <h1 className="text-center text-[#f204b4] font-black my-6 text-2xl">
        Créer une Invitation
      </h1>
      <HomeForm />
    </main>
  );
}
