"use client";
import React, { useEffect } from "react";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateFunnelFormSchema, IFunnel } from "@/types/types";
import { Loader } from "../global/Loader";
import FileUpload from "../global/FileUpload";
import { useModal } from "../../../providers/model-provider";
import { useToast } from "@/hooks/use-toast";
import { addFunnel } from "@/lib/queries";

interface CreateFunnelProps {
  defaultData?: IFunnel;
  subAccountId: string;
}

//CHALLENGE: Use favicons

const FunnelForm: React.FC<CreateFunnelProps> = ({ defaultData, subAccountId }) => {
  const { setClose } = useModal();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof CreateFunnelFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(CreateFunnelFormSchema),
    defaultValues: {
      name:  "",
      description:  "",
      favicon:  "",
      subDomainName:  "",
    },
  });

  useEffect(() => {
    if (defaultData) {
      form.reset({
        description: "",
        favicon: "",
        name:  "",
        subDomainName: "",
      });
    }
  }, [defaultData]);

  const isLoading = form.formState.isLoading;

  const onSubmit = async (values: z.infer<typeof CreateFunnelFormSchema>) => {
    if (!subAccountId) return;
    
    const response = await addFunnel(subAccountId, { ...values, liveProducts: defaultData?.liveProducts as string || "[]" }  );
    // await saveActivityLogsNotification({
    //   agencyId: undefined,
    //   description: `Update funnel | ${response.name}`,
    //   subaccountId: subAccountId,
    // })
    if (response)
      toast({
        title: "Success",
        description: "Saved funnel details",
      });
    else
      toast({
        variant: "destructive",
        title: "Oppse!",
        description: "Could not save funnel details",
      });
    // setClose();
    // router.refresh();
  };
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Funnel Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funnel Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funnel Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit more about this funnel."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="subDomainName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub domain</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Sub domain for funnel"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="favicon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favicon</FormLabel>
                  <FormControl>
                    <FileUpload
                      apiEndpoint="subaccountLogo"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-20 mt-4"
              disabled={isLoading}
              type="submit"
            >
              {form.formState.isSubmitting ? <Loader loading={isLoading} /> : "Save"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FunnelForm;
