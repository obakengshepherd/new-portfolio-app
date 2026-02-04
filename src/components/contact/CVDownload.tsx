"use client";

import { Card } from "@/components/common/Card";
import { contactInfo } from "@/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "../common/Button";

export function CVDownload() {
  return (
    <Card>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Mail size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-foreground mb-1">Download CV</h3>
          <p className="text-sm text-muted-foreground mb-4">
            A comprehensive look at my experience and qualifications
          </p>
          <Link
            href="/cv/OBAKENG SHEPHERD TSAAGANE - Resume.pdf"
            download
            className="w-full sm:w-auto"
          >
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
