export type DonationWishInput = {
  message: string
  campaignId: UUID
  personId?: UUID
  donationId?: UUID
}

export type DonationWishResponse = {
  id: UUID
  message: string
  campaignId: string
  donationId?: UUID
  personId?: UUID
  person?: { firstName: string; lastName: string }
  createdAt: DateTime
}