"use client";
import SubAccountDetails from "@/components/forms/Subaccount_form";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useModal } from "../../../../../../../providers/model-provider";
import CustomModal from "@/components/global/CustomModal";
import { IAgency, ISubAccount, IUser } from "@/types/types";

type Props = {
  user: IUser & {
    Agency:
      | (
          | IAgency
          | (null & {
              SubAccount: ISubAccount[];
            })
        )
      | null;
  };
  id: string;
  className: string;
};

const CreateSubaccountButton = ({ className, id, user }: Props) => {
  const { setOpen } = useModal();
  const agencyDetails = user.agencyId;  

  if (!agencyDetails) return;

  return (
    <Button
      className={twMerge("w-full flex gap-4", className)}
      onClick={() => {
        setOpen(
          <CustomModal
            title="Create a Subaccount"
            subheading="You can switch bettween"
          >
            <SubAccountDetails
              agencyDetails={agencyDetails as unknown as IAgency}
              userId={user?._id as string}
              userName={user?.username}
            />
          </CustomModal>
        );
      }}
    >
      <PlusCircleIcon size={15} />
      Create Sub Account
    </Button>
  );
};

export default CreateSubaccountButton;
