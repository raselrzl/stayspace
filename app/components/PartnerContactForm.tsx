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
import { MailIcon, Loader2 } from "lucide-react"; // Import the Loader2 icon
import { useState } from "react";

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

// Custom Modal component to show the success message and logo

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}
function CustomAlert({ message, onClose }: CustomAlertProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
        <img src="/stayspace.png" alt="Stayspace Logo" className="w-32 h-auto mb-4" />
        <p className="text-lg text-[#7B5B4C]">{message}</p>
        <div className="mt-4">
          <Button onClick={onClose} className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px]">
            Close
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
      message: "",
      consent: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showModal, setShowModal] = useState(false); // To control the modal visibility
  const [modalMessage, setModalMessage] = useState(""); // Message to show in the modal

  // OnSubmit function to send data to API
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true); // Set loading to true when submission starts
    console.log("Form Data:", data);

    try {
      // API call to submit the form data
      const response = await fetch("/api/sendForm", { // Replace this URL with your domain
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Show the custom modal with the success message
        setModalMessage("Your message has been submitted successfully! We usually respond within 24 hours.");
        setShowModal(true);
        // Optionally, you can reset the form after success
        form.reset();
      } else {
        // If the response is not OK, show an error message
        const errorData = await response.json();
        setModalMessage(`Error: ${errorData.message || "Failed to send form data."}`);
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
        Contact Us
      </h1>

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
              className="bg-[#7B5B4C] hover:bg-[#96705f] text-white rounded-[20px] cursor-pointer w-[150px]"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <Loader2 className="animate-spin mr-2" /> // Show the spinner if loading
              ) : (
                <MailIcon className="mr-2" />
              )}
              {isLoading ? "Submitting..." : "Send"} {/* Button text changes while loading */}
            </Button>
          </div>
        </form>
      </FormProvider>

      {/* Show the custom modal */}
      {showModal && <CustomAlert message={modalMessage} onClose={() => setShowModal(false)} />}
    </div>
  );
}
