'use client'
import React from 'react';
import { ColumnDef } from '@tanstack/react-table'

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const Columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: (props) => {
      const handDelete = () => {
        console.log(props.row.original);
      }
      return (<button onClick={handDelete}>Delete</button>)
    }
  }
]