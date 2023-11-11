import Button from "@/components/button";
import Card from "@/components/card";
import Select from "@/components/select";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[889px]">
        <Card>
          <div className="flex-start">
            <Select />
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Button />
        </Card>
      </div>
    </main>
  );
}
