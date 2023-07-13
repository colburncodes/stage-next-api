"use client";
import PageTitle from "@/components/PageTitle";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function Jobs() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title={"Jobs"} />
        <Button type="primary" onClick={() => router.push("/jobs/create")}>
          New Job
        </Button>
      </div>
    </div>
  );
}
