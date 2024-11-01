"use client";

import { ColumnDef } from "@tanstack/react-table";

export type CourseDataColumn = {
  date: string;
  listen: number;
  reading: number;
  writing: number;
  speaking: number;
};

export const columns: ColumnDef<CourseDataColumn>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "listen",
    header: "Listening Score",
  },
  {
    accessorKey: "reading",
    header: "Reading Score",
  },
  {
    accessorKey: "speaking",
    header: "Speaking Score",
  },
  {
    accessorKey: "writing",
    header: "Writing Score",
  },
];
