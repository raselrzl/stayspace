import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MailIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t= useTranslations(); // ⬅️ translation function

  // Validation schema with zod
  const FormSchema = z.object({
    name: z.string().min(2, { message: t("validation.name") }),
    business: z.string().min(2, { message: t("validation.business") }),
    email: z.string().email({ message: t("validation.email") }),
    phone: z.string().min(10, { message: t("validation.phone") }),
    message: z.string().min(10, { message: t("validation.message") }),
    consent: z
      .boolean()
      .refine((val) => val === true, {
        message: t("validation.consent"),
      })
      .optional(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      business: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    console.log("Form Data:", data);

    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalMessage(t("form.successMessage"));
        setShowModal(true);
        form.reset();
      } else {
        const errorData = await response.json();
        setModalMessage(
          `Error: ${errorData.message || t("form.errorGeneric")}`
        );
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalMessage(t("form.errorGeneric"));
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 sm:px-6 lg:px-10 text-[#7B5B4C]">
      <h1 className="lg text-center font-bold mb-4 flex justify-center uppercase">
        {t("form.title")}
      </h1>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">{t("form.name")} *</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.namePlaceholder")}
                    {...field}
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Business Field */}
          <FormField
            control={form.control}
            name="business"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">{t("form.business")} *</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.businessPlaceholder")}
                    {...field}
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">{t("form.email")} *</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.emailPlaceholder")}
                    {...field}
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">{t("form.phone")} *</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.phonePlaceholder")}
                    {...field}
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">{t("form.message")} *</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                    placeholder={t("form.messagePlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Consent Checkbox */}
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consent"
                      checked={field.value === true}
                      onCheckedChange={(checked: boolean) => field.onChange(checked)}
                      className="rounded-none"
                    />
                    <FormLabel htmlFor="consent" className="text-xs text-justify">
                      {t("form.consentText")}
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px] cursor-pointer w-[150px]"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="animate-spin mr-2" /> : <MailIcon className="mr-2" />}
              {isLoading ? t("form.submitting") : t("form.submit")}
            </Button>
          </div>
        </form>
      </FormProvider>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-200 p-6 rounded-sm shadow-lg text-center w-[320px] md:w-[400px]">
            <img src="/stayspace.png" alt="Stayspace Logo" className="w-32 h-auto mb-4" />
            <p className="text-lg text-[#7B5B4C]">{t("successMessageContact")}</p>
            <div className="mt-4">
              <Button onClick={() => setShowModal(false)} className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px]">
                {t("form.close")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
