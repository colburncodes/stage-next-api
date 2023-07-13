"use client";
import PageTitle from "@/components/PageTitle";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function Create() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title={"Create Job"} />
        <Button type="primary" onClick={() => router.back()}>
          Back
        </Button>
      </div>
    </div>
  );
}
