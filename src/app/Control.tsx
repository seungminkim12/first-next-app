"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Control() {
  const params = useParams();
  const { id } = params;
  return (
    <ul>
      <li>
        <Link href="/create" prefetch={false}>
          Create
        </Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href="/update/1" prefetch={false}>
              Update
            </Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </>
      ) : null}
    </ul>
  );
}
