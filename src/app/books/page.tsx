import { redirect } from "next/navigation";

// Only one book for now — go directly to it
export default function BooksIndexPage() {
  redirect("/books/livonian-chronicle");
}
