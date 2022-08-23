import React from "react";
import type { ErrorProps } from "next/error";
import type { MarkOptional } from "ts-essentials";
import ErrorMessage from "@/components/common/ErrorMessage"

export default function MyError({
  statusCode,
}: MarkOptional<ErrorProps, "statusCode">) {
  return <>{statusCode ?? <ErrorMessage />}</>;
}
