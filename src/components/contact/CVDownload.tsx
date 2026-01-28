"use client";

import { Card } from "@/components/common/Card";
import { contactInfo } from "@/data/contact";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import Link from "next/link";

export function CVDownload() {
  return (
    <Card>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Download size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-foreground mb-1">Download My CV</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get a comprehensive look at my experience and qualifications
          </p>
          <a
            href={contactInfo.cvUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-background hover:bg-primary-hover transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </Card>
  );
}
