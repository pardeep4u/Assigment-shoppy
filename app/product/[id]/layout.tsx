import Back from "@/components/Back";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Back />
      {children}
    </section>
  );
}
