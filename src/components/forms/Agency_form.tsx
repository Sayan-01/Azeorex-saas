"use client";
import React, { useState } from "react";
import { AlertDialog } from "../ui/alert-dialog";
import { CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FileUpload from "../global/FileUpload";
import { Switch } from "../ui/switch";
import { Loader } from "../global/Loader";
import GlassCard from "../global/glass-card";
import { IAgency, Role } from "@/types/types";
import { updateUserRole, upsertAgency } from "@/lib/queries";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Agency name must be at least 2 characters.",
  }),
  companyEmail: z.string().min(1).email(),
  companyPhone: z.string().min(1),
  whiteLabel: z.boolean(),
  address: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  agencyLogo: z.string().min(1),
});

type Props = {
  data?: Partial<IAgency>;
};

const Agency_form = ({ data }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const [deletingAgency, setDeletingAgency] = useState(false);
  const { data: session, update } = useSession();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      companyEmail: "",
      companyPhone: "",
      whiteLabel: false,
      address: "",
      city: "",
      zipCode: "",
      state: "",
      country: "",
      agencyLogo: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  
  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
       let agencyDetails = await upsertAgency({
        address: values.address,
        agencyLogo: values.agencyLogo,
        city: values.city,
        companyPhone: values.companyPhone,
        country: values.country,
        name: values.name,
        state: values.state,
        whiteLabel: values.whiteLabel,
        zipCode: values.zipCode,
        createdAt: new Date(),
        companyEmail: values.companyEmail,
        goal: 5,
      });

      const agencyDetailsData = JSON.parse(agencyDetails ?? "");
      console.log(agencyDetailsData);
      
      await updateUserRole({ role: Role.AGENCY_OWNER, agencyId: agencyDetailsData._id });

      if (session) {
        await update({
          ...session,
          user: { ...session.user, role: Role.AGENCY_OWNER },
        });
      } else {
        console.error("Session is null. User is not authenticated.");
      }

      toast({
        title: "✨ Agency Created",
        description: "Congratulations your agency is created"
      });
      return router.refresh();
    } catch (error) {
      console.log("errrrror", error);
      toast({
        variant: "destructive",
        title: "😫 Oppse!",
        description: "Could not create your agency",
      });
    }
  };

  const handleDeleteAgency = async () => {
    if (!data?.id) return;
    setDeletingAgency(true);
    //WIP: discontinue the subscription
    try {
      //  const response = await deleteAgency(data.id);
      toast({
        title: "Deleted Agency",
        description: "Deleted your agency and all subaccounts",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Oppse!",
        description: "could not delete your agency ",
      });
    }
    setDeletingAgency(false);
  };

  return (
    <AlertDialog>
      <GlassCard className="w-full">
        <CardHeader>
          <CardTitle className="">Agency Information</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequatur veniam, error id maiores iusto incidunt rem maxime? Expedita deserunt libero voluptas quasi repellendus quaerat
            accusantium officia tenetur, repudiandae quia?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <div className=" flex md:flex-row gap-6 ">
                <FormField
                  control={form.control}
                  name="agencyLogo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agency Logo</FormLabel>
                      <FormControl>
                        <FileUpload
                          className="w-60 h-72"
                          apiEndpoint="agencyLogo"
                          onChange={field.onChange}
                          value={field.value}
                        ></FileUpload>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex flex-col gap-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Agency Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter agency name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Agency name must be at least 2 characters.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyEmail"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Company Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter company email"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>This should be a valid email address.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter company phone"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Provide your company&apos;s contact number.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="whiteLabel"
                render={({ field }) => (
                  <FormItem className="flex gap-10 items-center">
                    <div>
                      <FormLabel>White Label</FormLabel>
                      <FormDescription>
                        Check if this is a white-label service Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quasi consequatur aut id obcaecati, voluptate voluptas? Laborum, ad ipsam!
                        Exercitationem doloribus nam asperiores suscipit aliquid possimus, consequuntur unde delectus nihil..
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter address"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Full street address.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex md:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter city"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Your city name.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter zip code"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Your postal code.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter state"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Your state or region.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter country"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Your country.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? (
                  <>
                    <Loader loading={isLoading} />
                  </>
                ) : (
                  <p>Save agency information</p>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </GlassCard>
    </AlertDialog>
  );
};

export default Agency_form;
