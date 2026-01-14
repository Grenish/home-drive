"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  Book,
  CircleQuestionMark,
  Cloud,
  HardDrive,
  KeyRound,
  Folder,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

// Types for our configuration
type StorageProvider = "local" | "cloudinary" | "uploadthing";

export default function Page() {
  const [step, setStep] = useState<number>(1);
  const [selectedProvider, setSelectedProvider] =
    useState<StorageProvider | null>(null);

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);

  const handleProviderSelect = (provider: StorageProvider) => {
    setSelectedProvider(provider);
    handleNextStep();
  };

  return (
    <div className="w-full min-h-screen grid place-items-center p-4">
      {step === 1 && <CardIntro onNext={handleNextStep} />}

      {step === 2 && (
        <CardStorage
          onNext={handleProviderSelect}
          onBack={handlePrevStep}
          initialSelected={selectedProvider}
        />
      )}

      {step === 3 && selectedProvider && (
        <CardStorageEnv provider={selectedProvider} onBack={handlePrevStep} />
      )}
    </div>
  );
}

// --- Components ---

const CardIntro = ({ onNext }: { onNext: () => void }) => {
  return (
    <Card className="max-w-xl w-full">
      <CardHeader>
        <CardTitle>Your Files, Your Cloud</CardTitle>
        <CardDescription>
          Home Drive is an open-source, self-hosted cloud storage platform that
          gives you a simple way to store and sync files while retaining full
          ownership of your data.
        </CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        <Button variant={"outline"}>
          <Book className="w-4 h-4 mr-2" /> Docs
        </Button>
        <Button onClick={onNext}>
          Next <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

interface CardStorageProps {
  onNext: (provider: StorageProvider) => void;
  onBack: () => void;
  initialSelected: StorageProvider | null;
}

const CardStorage = ({ onNext, onBack, initialSelected }: CardStorageProps) => {
  const [selected, setIsSelected] = React.useState<StorageProvider | null>(
    initialSelected,
  );

  return (
    <Card className="max-w-xl w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Set Up Your File Storage</CardTitle>
          <Dialog>
            <DialogTrigger
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
              )}
            >
              <CircleQuestionMark className="w-5 h-5" />
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Choose File Storage</DialogTitle>
                <DialogDescription>
                  Select where files will be stored. This choice is permanent
                  for this instance and cannot be changed later.
                </DialogDescription>
              </DialogHeader>

              <div>
                <ul className="space-y-4">
                  <li>
                    <strong>Local Storage</strong>
                    <div className="text-muted-foreground text-sm">
                      Files are stored on your server disk. Fully self-hosted
                      with no third-party dependency.
                    </div>
                  </li>

                  <li>
                    <strong>Cloudinary</strong>
                    <div className="text-muted-foreground text-sm">
                      Files are stored on Cloudinary. Best for images and videos
                      with automatic optimization and transformations.
                    </div>
                  </li>

                  <li>
                    <strong>UploadThing</strong>
                    <div className="text-muted-foreground text-sm">
                      Files are handled by UploadThing’s managed upload service.
                      Optimized for fast and secure uploads.
                    </div>
                  </li>
                </ul>
              </div>
              <DialogFooter>
                <div className="text-xs text-muted-foreground">
                  For more detailed information check the{" "}
                  <Link href="/" className="underline text-primary">
                    docs
                  </Link>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription>
          Choose where your files will be stored. Once selected, this setting
          can’t be changed later.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          onClick={() => setIsSelected("local")}
          className={cn(
            "border rounded-md flex flex-col items-center justify-center py-6 space-y-3 transition-all hover:border-primary/50",
            selected === "local"
              ? "bg-primary/5 border-primary ring-1 ring-primary"
              : "bg-card",
          )}
        >
          <HardDrive className="w-8 h-8 opacity-80" />
          <h2 className="text-sm font-semibold">Local Storage</h2>
        </button>

        <button
          onClick={() => setIsSelected("cloudinary")}
          className={cn(
            "border rounded-md flex flex-col items-center justify-center py-6 space-y-3 transition-all hover:border-primary/50",
            selected === "cloudinary"
              ? "bg-primary/5 border-primary ring-1 ring-primary"
              : "bg-card",
          )}
        >
          <CloudinaryIcon />
          <h2 className="text-sm font-semibold">Cloudinary</h2>
        </button>

        <button
          onClick={() => setIsSelected("uploadthing")}
          className={cn(
            "border rounded-md flex flex-col items-center justify-center py-6 space-y-3 transition-all hover:border-primary/50",
            selected === "uploadthing"
              ? "bg-primary/5 border-primary ring-1 ring-primary"
              : "bg-card",
          )}
        >
          <Cloud className="w-8 h-8 opacity-80" />
          <h2 className="text-sm font-semibold">UploadThing</h2>
        </button>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant={"outline"} onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <Button
          onClick={() => selected && onNext(selected)}
          disabled={!selected}
        >
          Next <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

interface EnvConfig {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
}

const CardStorageEnv = ({
  provider,
  onBack,
}: {
  provider: StorageProvider;
  onBack: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Configuration mapping based on provider
  const getFields = (): EnvConfig[] => {
    switch (provider) {
      case "local":
        return [
          {
            label: "Root Directory",
            icon: <Folder className="w-4 h-4" />,
            placeholder: "./uploads",
          },
        ];
      case "cloudinary":
        return [
          {
            label: "Cloud Name",
            icon: <User className="w-4 h-4" />,
            placeholder: "di3xx...",
          },
          {
            label: "API Key",
            icon: <KeyRound className="w-4 h-4" />,
            placeholder: "8392...",
          },
          {
            label: "API Secret",
            icon: <KeyRound className="w-4 h-4" />,
            placeholder: "my_secret_key",
          },
        ];
      case "uploadthing":
        return [
          {
            label: "API Token",
            icon: <KeyRound className="w-4 h-4" />,
            placeholder: "sk_live_...",
          },
        ];
      default:
        return [];
    }
  };

  const fields = getFields();

  const handleCheck = () => {
    setIsLoading(true);
    // Simulate API check
    setTimeout(() => setIsLoading(false), 1500);
  };

  // Helper to format provider name for display
  const providerName = {
    local: "Local Storage",
    cloudinary: "Cloudinary",
    uploadthing: "UploadThing",
  }[provider];

  return (
    <Card className="max-w-xl w-full">
      <CardHeader>
        <CardTitle>Configure {providerName}</CardTitle>
        <CardDescription>
          Enter the required environment variables to connect to {providerName}.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {fields.map((field, idx) => (
          <div key={idx} className="space-y-1">
            <span className="text-sm font-medium ml-1">{field.label}</span>
            <InputGroup>
              <InputGroupAddon>{field.icon}</InputGroupAddon>
              <InputGroupInput
                placeholder={field.placeholder}
                type={
                  field.label.toLowerCase().includes("secret") ||
                  field.label.toLowerCase().includes("token")
                    ? "password"
                    : "text"
                }
              />
            </InputGroup>
          </div>
        ))}
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant={"outline"} onClick={onBack} disabled={isLoading}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <Button onClick={handleCheck} disabled={isLoading}>
          {isLoading ? (
            <>
              Checking <Spinner className="ml-2" />
            </>
          ) : (
            "Check Connection"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

const CloudinaryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      className="w-8 h-8 opacity-80"
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M81.1 40.3c-2.1-6.7-6.4-12.6-12-16.8-5.7-4.2-12.5-6.5-19.6-6.5-6 0-11.8 1.6-17 4.6-5.1 3-9.3 7.4-12.1 12.7-5.2.9-9.9 3.5-13.6 7.3C3.2 45.4.9 50.3.2 55.5S.6 66 3.1 70.6c2.6 4.6 6.5 8.3 11.3 10.5l.6.3v-7c-3.3-2-5.9-5-7.4-8.6s-1.8-7.5-1-11.2c.8-3.8 2.9-7.2 5.7-9.7 2.9-2.6 6.5-4.2 10.3-4.6l1.7-.2.8-1.6c2.2-4.6 5.6-8.5 9.9-11.2s9.3-4.1 14.3-4.1c6 0 11.9 2.1 16.6 5.9s8.1 9 9.5 14.9l.6 2.4h2.5c4 .1 7.8 1.7 10.6 4.6s4.4 6.7 4.4 10.7c0 5.8-3.4 10.6-9.1 13v6.7l.4-.1c9.2-3 15-10.5 15-19.6 0-5.2-2-10.3-5.4-14.2-3.3-4-8.1-6.5-13.3-7.2" />
        <path d="m37.3 80.6 1.4 1.4.1.1v.2l-.1.1h-11c-1.3 0-2.6-.5-3.5-1.5-.9-.9-1.5-2.2-1.5-3.5v-21c0-.1 0-.1-.1-.2s-.1-.1-.2-.1h-2.5l-.1-.1v-.2c0-.1 0-.1.1-.1l9.2-9.2s.1 0 .1-.1.1 0 .1 0h.1s.1 0 .1.1l9.2 9.2.1.1v.2l-.1.1h-2.5c-.1 0-.1 0-.2.1s-.1.1-.1.2v20.7c0 1.3.5 2.6 1.4 3.5m20.4 0 1.4 1.4.1.1v.2l-.1.1h-11c-1.3 0-2.6-.5-3.5-1.5-.9-.9-1.5-2.2-1.5-3.5V61.7c0-.1 0-.1-.1-.2s-.1-.1-.2-.1h-2.4l-.1-.1v-.2c0-.1 0-.1.1-.1l9.2-9.2s.1 0 .1-.1h.2s.1 0 .1.1l9.2 9.2.1.1v.2l-.1.1h-2.6c-.1 0-.1 0-.2.1s-.1.1-.1.2v15.4c0 1.3.5 2.6 1.4 3.5m20.4 0 1.4 1.4.1.1v.2l-.1.1H68.4c-1.3 0-2.6-.5-3.5-1.5-.9-.9-1.5-2.2-1.5-3.5V67c0-.1 0-.1-.1-.2s-.1-.1-.2-.1h-2.5l-.1-.1v-.2c0-.1 0-.1.1-.1l9.2-9.2s.1 0 .1-.1.1 0 .1 0h.1s.1 0 .1.1l9.2 9.2.1.1v.2c0 .1-.1.1-.1.1h-2.6c-.1 0-.1 0-.2.1s-.1.1-.1.2v10.1c.1 1.3.6 2.6 1.6 3.5" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
