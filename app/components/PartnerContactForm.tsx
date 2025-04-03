"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form"; // Use FormProvider from react-hook-form
import { z } from "zod";
import { toast } from "sonner"; // Use Sonner's toast

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Custom Form components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MailIcon } from "lucide-react";

// Validation schema with zod
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  business: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must consent to the data being stored and processed.",
    })
    .optional(),
});

export default function PartnerContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      business: "",
      email: "",
      phone: "",
      message: "",
      consent: false, // Default consent is false (unchecked)
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Console log the form data
    console.log("Form Data:", data);

    // Show success toast message
    toast.success(
      <div className="bg-slate-950 p-4 rounded-md">
        <h3 className="text-[#7B5B4C] text-lg font-bold">
          Form submitted successfully, we will get in touch with you as soon as
          possible.
        </h3>
      </div>
    );

    // Reload the page after form submission
    setTimeout(() => {
      window.location.reload();
    }, 1500); // Delay to ensure the toast is visible before reload
  }

  return (
    <div className="max-w-xl mx-auto p-6 sm:px-6 lg:px-10 text-[#7B5B4C]">
      <h1 className="lg text-center font-bold mb-4 flex justify-center uppercase">
        Contact Us
      </h1>

      {/* Use FormProvider to wrap your form to give it context */}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
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
                <FormLabel>Business *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Business"
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
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@mail.com"
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
                <FormLabel>Phone *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123-456-7890"
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
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                    placeholder="Your message"
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
                      checked={field.value === true} // Only checked if value is true
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked)
                      } // Correct onChange handler
                      className="rounded-none"
                    />
                    <FormLabel
                      htmlFor="consent"
                      className="text-xs text-justify"
                    >
                      I hereby consent to this data being stored and processed
                      for the purpose of establishing contact. I am aware that I
                      can withdraw my consent at any time.
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
              className="sm:w-auto bg-[#fd6d15] rounded-none cursor-pointer"
            >
              <MailIcon className="mr-2" /> Send
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
