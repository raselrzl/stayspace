import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form"; 
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"; 
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MailIcon, Loader2 } from "lucide-react"; // Import the Loader2 icon
import { useState } from "react";
import { useTranslations } from "next-intl";
// Validation schema with zod
const FormSchema = z.object({
  name: z.string().min(2, { message: "partnerContactForm.name_validation" }),
  business: z.string().min(2, { message: "partnerContactForm.business_validation" }),
  email: z.string().email({ message: "partnerContactForm.email_validation" }),
  phone: z.string().min(10, { message: "phone_validation" }),
  streetName: z.string().min(2, { message: "streetName_validation" }),
  zipCode: z.string().min(2, { message: "zipCode_validation" }),
  city: z.string().min(2, { message: "city_validation" }),
  toilets: z.string().min(1).max(10, { message: "toilets_validation" }),
  showers: z.string().min(1).max(10, { message: "showers_validation" }),
  desiredPrice: z.string().min(1, { message: "desiredPrice_validation" }),
  bedroom: z.string().min(1).max(10, { message: "bedroom_validation" }),
  beds: z.string().min(1).max(10, { message: "beds_validation" }),
  livingRoom: z.string().min(1).max(10, { message: "livingRoom_validation" }),
  kitchen: z.string().min(1).max(10, { message: "kitchen_validation" }),
  typeOfAccommodation: z.string().min(1, { message: "typeOfAccommodation_validation" }),
  startingDate: z.string().min(1, { message: "startingDate_validation" }),
  consent: z.boolean().refine((val) => val === true, { message: "consent_validation" }).optional(),
  otherInformation: z.string().optional(),
});

// Custom Modal component to show the success message and logo
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
          <Button onClick={onClose} className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px]">
            X
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function PartnerContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      business: "",
      email: "",
      phone: "",
      streetName: "",
      zipCode: "",
      city: "",
      bedroom: "",
      beds: "",
      livingRoom: "",
      kitchen: "",
      toilets: "",
      showers: "",
      desiredPrice: "",
      typeOfAccommodation: "",
      startingDate: "",
      otherInformation: "",
      consent: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false); 
  const [showModal, setShowModal] = useState(false); 
  const [modalMessage, setModalMessage] = useState(""); 

  // OnSubmit function to send data to API
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true); 
    console.log("Form Data:", data);

    try {
      const response = await fetch("/api/sendForm", { // Replace this URL with your domain
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalMessage("Your message has been submitted successfully! We usually respond within 24 hours.");
        setShowModal(true);
        form.reset();
      } else {
        const errorData = await response.json();
        setModalMessage(`Error: ${errorData.message || "Failed to send form data."}`);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalMessage("Something went wrong. Please try again later.");
      setShowModal(true);
    } finally {
      setIsLoading(false); 
    }
  }
  const t = useTranslations("partnerContactForm");
  return (
    <div className="max-w-[900px] mx-auto p-6 sm:px-6 lg:px-10 text-[#7B5B4C]">
      <h1 className="lg text-center font-bold mb-4 flex justify-center uppercase">
      {t("form_heading")}
      </h1>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6 shadow-md max-w-[900px]">
          <div className="md:flex md:space-x-4">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("name_label")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("name_placeholder")} className="w-full border border-gray-300 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("phone_label")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="123-456-7890" className="w-full border border-gray-300 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          {/* Email and Business Fields */}
          <div className="md:flex md:space-x-4">
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("email_label")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="example@mail.com" className="w-full border border-gray-300 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="business" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("business_label")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your Business" className="w-full border border-gray-300 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          {/* Address Fields */}
          <div className="md:flex md:space-x-4">
            <FormField control={form.control} name="streetName" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("streetName_label")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="123 Main St" className="w-full border border-gray-300 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="zipCode" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("zipCode_label")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="12345" className="w-full border border-gray-300 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="city" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("city_label")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="City Name" className="w-full border border-gray-300 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          {/* Toilets, Showers, and Desired Price Fields */}
          <div className="grid grid-cols-3 space-x-4">
            <FormField control={form.control} name="toilets" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("toilets_label")}*</FormLabel>
                <FormControl>
                  <select {...field} className="w-full border border-gray-300 rounded-none h-9">
                    {[...Array(10)].map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="showers" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("showers_label")}*</FormLabel>
                <FormControl>
                  <select {...field} className="w-full border border-gray-300 rounded-none  h-9">
                    {[...Array(10)].map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="desiredPrice" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("desiredPrice_label")}*</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="100" type="number" className="w-full border border-gray-300 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          {/* Bedroom, Beds, Living Room, Kitchen Fields */}
          <div className="grid grid-cols-2 md:grid-cols-4 space-x-4">
            <FormField control={form.control} name="bedroom" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("bedroom_label")}*</FormLabel>
                <FormControl>
                  <select {...field} className="w-full border border-gray-300 rounded-none h-9">
                    {[...Array(10)].map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="beds" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("beds_label")}*</FormLabel>
                <FormControl>
                  <select {...field} className="w-full border border-gray-300 rounded-none h-9">
                    {[...Array(10)].map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="livingRoom" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("livingRoom_label")}*</FormLabel>
                <FormControl>
                  <select {...field} className="w-full border border-gray-300 rounded-none h-9">
                    {[...Array(10)].map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="kitchen" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="uppercase font-bold">{t("kitchen_label")}*</FormLabel>
                <FormControl>
                  <select {...field} className="w-full border border-gray-300 rounded-none h-9">
                    {[...Array(10)].map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          {/* Type of Accommodation */}
          <FormField control={form.control} name="typeOfAccommodation" render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase font-bold">{t("typeOfAccommodation_label")} *</FormLabel>
              <FormControl>
                <select {...field} className="w-full border border-gray-300 rounded-none h-9">
                  <option value="apartment">{t("typeOfAccommodation_apartment")}</option>
                  <option value="room">{t("typeOfAccommodation_room")}</option>
                  <option value="villa">{t("typeOfAccommodation_villa")}</option>
                  <option value="others">{t("typeOfAccommodation_others")}</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* Starting Date */}
          <FormField control={form.control} name="startingDate" render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase font-bold">{t("startingDate_label")}*</FormLabel>
              <FormControl>
                <Input {...field} type="date" className="w-full border border-gray-300 rounded-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* Other Information */}
          <FormField control={form.control} name="otherInformation" render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase font-bold">{t("otherInformation_label")}</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Additional information..." className="w-full border border-gray-300 rounded-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* Consent Checkbox */}
          <FormField control={form.control} name="consent" render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox checked={field.value === true} onCheckedChange={field.onChange} />
                  <FormLabel className="text-xs text-justify" htmlFor="consent">
                  {t("consent_text")}
                  </FormLabel>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex justify-center items-center">
            <Button type="submit" className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px] w-[150px]" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin mr-2" /> : <MailIcon className="mr-2" />}
              {isLoading ? t("submitting") : t("submit")}
            </Button>
          </div>
        </form>
      </FormProvider>

      {/* Show the custom modal */}
      {showModal && <CustomAlert message={t("successMessag")} onClose={() => setShowModal(false)} />}
    </div>
  );
}
