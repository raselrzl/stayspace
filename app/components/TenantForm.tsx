"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, Loader2 } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

function CustomAlert({ message, onClose }: CustomAlertProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-200 p-6 rounded-sm shadow-lg text-center w-[320px] md:w-[400px]">
        <img src="/stayspace.png" alt="Stayspace Logo" className="w-32 h-auto mb-4" />
        <p className="text-lg text-[#7B5B4C]">{message}</p>
        <div className="mt-4">
          <Button onClick={onClose} className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px] px-6">
            X
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function TenantForm() {
  const t = useTranslations("TenantForm");
  const f = t.raw("fields");

  const TenantFormSchema = z.object({
    fullName: z.string().min(2, { message: f.fullName.error }),
    email: z.string().email({ message: f.email.error }),
    companyName: z.string().optional(),
    numberOfPeople: z.string().min(1, { message: f.numberOfPeople.error }),
    leaseStartPeriod: z.string().min(1, { message: f.leaseStartPeriod.error }),
    endPeriodForRental: z.string().min(1, { message: f.endPeriodForRental.error }),
    message: z.string().min(10, { message: f.message.error }),
  });

  const form = useForm<z.infer<typeof TenantFormSchema>>({
    resolver: zodResolver(TenantFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      numberOfPeople: "",
      leaseStartPeriod: "",
      endPeriodForRental: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  async function onSubmit(data: z.infer<typeof TenantFormSchema>) {
    setIsLoading(true);
    try {
      const res = await fetch("/api/tenantForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setModalMessage(t("successMessage"));
        setShowModal(true);
        form.reset();
      } else {
        const errorData = await res.json();
        setModalMessage(`Error: ${errorData.message || t("errorMessage")}`);
        setShowModal(true);
      }
    } catch {
      setModalMessage(t("errorMessage"));
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 sm:px-6 lg:px-10 text-[#7B5B4C]">
      <h1 className="text-center font-bold mb-4 uppercase">{t("title")}</h1>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 shadow-md max-w-[900px] p-6">
          {["fullName", "email", "companyName", "numberOfPeople", "leaseStartPeriod", "endPeriodForRental", "message"].map((fieldName) => (
            <FormField
              key={fieldName}
              control={form.control}
              name={fieldName as keyof z.infer<typeof TenantFormSchema>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase font-bold">{f[fieldName].label}</FormLabel>
                  <FormControl>
                    {fieldName === "message" ? (
                      <Textarea
                        placeholder={f[fieldName]?.placeholder}
                        {...field}
                        className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                      />
                    ) : (
                      <Input
                        type={["leaseStartPeriod", "endPeriodForRental"].includes(fieldName) ? "date" : fieldName === "numberOfPeople" ? "number" : "text"}
                        placeholder={f[fieldName]?.placeholder}
                        {...field}
                        className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px] cursor-pointer w-[150px]"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="animate-spin mr-2" /> : <MailIcon className="mr-2" />}
              {isLoading ? t("submit.loading") : t("submit.default")}
            </Button>
          </div>
        </form>
      </FormProvider>

      {showModal && (
        <CustomAlert
          message={t("successMEssageForTannent")}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
