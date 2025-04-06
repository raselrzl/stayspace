"use client";
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
import { MailIcon, Loader2 } from "lucide-react"; // Import the Loader2 icon
import { useState } from "react";

// Validation schema with zod
const TenantFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  companyName: z.string().optional(),
  numberOfPeople: z.string().min(1, {
    message: "Number of People must be provided.",
  }),
  leaseStartPeriod: z.string().min(1, {
    message: "Lease Start Period must be provided.",
  }),
  endPeriodForRental: z.string().min(1, {
    message: "End Period for Rental must be provided.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
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
        <img
          src="/stayspace.png"
          alt="Stayspace Logo"
          className="w-32 h-auto mb-4"
        />
        <p className="text-lg text-[#7B5B4C]">{message}</p>
        <div className="mt-4">
          <Button
            onClick={onClose}
            className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px]"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function TenantForm() {
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

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showModal, setShowModal] = useState(false); // To control the modal visibility
  const [modalMessage, setModalMessage] = useState(""); // Message to show in the modal

  // OnSubmit function to send data to API
  async function onSubmit(data: z.infer<typeof TenantFormSchema>) {
    setIsLoading(true); // Set loading to true when submission starts
    console.log("Form Data:", data);

    try {
      // API call to submit the form data (replace the URL with your API endpoint)
      const response = await fetch("/api/tenantForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Show the custom modal with the success message
        setModalMessage(
          "Your tenant application has been successfully submitted."
        );
        setShowModal(true);
        // Optionally, you can reset the form after success
        form.reset();
      } else {
        const errorData = await response.json();
        setModalMessage(
          `Error: ${errorData.message || "Failed to submit tenant form."}`
        );
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalMessage("Something went wrong. Please try again later.");
      setShowModal(true);
    } finally {
      setIsLoading(false); // Reset loading state after submission attempt
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 sm:px-6 lg:px-10 text-[#7B5B4C]">
      <h1 className="lg text-center font-bold mb-4 flex justify-center uppercase">
        Tenant Application Form
      </h1>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 shadow-md max-w-[900px] p-6">
          {/* Full Name Field */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">
                  Full Name *
                </FormLabel>
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

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">Email *</FormLabel>
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

          {/* Company Name Field (Optional) */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">
                  Company Name (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Company Name"
                    {...field}
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Number of People Field */}
          {/* Number of People Field */}
          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">
                  Number of People *
                </FormLabel>
                <FormControl>
                  <Input
                    type="number" // Change to number input type
                    placeholder="Number of people"
                    {...field}
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Lease Start Period Field */}
          <FormField
            control={form.control}
            name="leaseStartPeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">
                  Lease Start Period *
                </FormLabel>
                <FormControl>
                  <Input
                    type="date" // Change to date input type
                    {...field}
                    className="w-full border border-gray-300 focus:border-2 focus:outline-none rounded-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Period for Rental Field */}
          <FormField
            control={form.control}
            name="endPeriodForRental"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold">
                  End Period for Rental *
                </FormLabel>
                <FormControl>
                  <Input
                    type="date" // Change to date input type
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
                <FormLabel className="uppercase font-bold">Message *</FormLabel>
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

          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px] cursor-pointer w-[150px]"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <Loader2 className="animate-spin mr-2" /> // Show the spinner if loading
              ) : (
                <MailIcon className="mr-2" />
              )}
              {isLoading ? "Submitting..." : "Send"}{" "}
              {/* Button text changes while loading */}
            </Button>
          </div>
        </form>
      </FormProvider>

      {/* Show the custom modal */}
      {showModal && (
        <CustomAlert
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
