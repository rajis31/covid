"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 inset-x-4 z-50 transition-all duration-300",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <Card className="max-w-xl mx-auto shadow-lg border border-gray-200">
        <CardContent className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-sm text-gray-800">
            We use minimal cookies for user authentication. By clicking "Accept", you agree to our use of cookies.
          </div>
          <Button onClick={acceptCookies} className="mt-2 md:mt-0">
            Accept
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
