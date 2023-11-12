"use client";
import { setDefaultAutoSelectFamilyAttemptTimeout } from "net";
import Button from "../../components/button";
import Card from "../../components/card";
import Radio from "../../components/radio";
import Select from "../../components/select";
import { useState } from "react";

export default function Home() {
  const [isAnswer, setIsAnswer] = useState(false);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="w-[889px]">
          <div className="my-4">
            <Card>
              <div className="flex-start">
                <Select />
              </div>
              <p>
                「文化的景観」の価値が認められた遺産として、正しいものはどれか。
              </p>
              <Radio>1. タフテ・スレイマーン</Radio>
              <Radio>2. サン・ジョルジオ山</Radio>
              <Radio>3. マトボの丘群</Radio>
              <Radio>4. マンモス・ケーブ国立公園</Radio>
              <div></div>
              <Button onClick={() => setIsAnswer(true)} />
            </Card>
          </div>
          <div></div>
          {isAnswer && <Card>答え</Card>}
        </div>
      </main>
    </>
  );
}
