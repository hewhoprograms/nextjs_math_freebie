import DiscountForm from "./discount-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-extrabold text-2xl my-9">Percent Discount</h1>
      <DiscountForm />
    </main>
  );
}
