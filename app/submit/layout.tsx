import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Tool | FieldSalesTools.com",
  description:
    "List your field sales or D2D software tool on FieldSalesTools.com. Free basic listing or featured placement.",
  openGraph: {
    title: "Submit Your Tool | FieldSalesTools.com",
    description:
      "List your field sales or D2D software tool. Free basic listing or featured placement.",
    url: "https://www.fieldsalestools.com/submit",
    siteName: "FieldSalesTools.com",
    images: [
      {
        url: "https://www.fieldsalestools.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit Your Tool | FieldSalesTools.com",
    description:
      "List your field sales or D2D software tool. Free basic listing or featured placement.",
    images: ["https://www.fieldsalestools.com/og-image.png"],
  },
};

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
