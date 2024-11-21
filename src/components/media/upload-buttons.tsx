'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useModal } from '../../../providers/model-provider'
import CustomModal from '../global/CustomModal'
import UploadMediaForm from '../forms/upload-media'

type Props = {
  subaccountId: string
}

const MediaUploadButton = ({ subaccountId }: Props) => {
  const {  setOpen } = useModal()

  return (
    <Button
      onClick={() => {
        setOpen(
          <CustomModal
            title="Upload Media"
            subheading="Upload a file to your media bucket"
          >
            <UploadMediaForm subaccountId={subaccountId}></UploadMediaForm>
          </CustomModal>
        )
      }}
    >
      Upload
    </Button>
  )
}

export default MediaUploadButton
