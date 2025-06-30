export class Accounts {
  account_id: string;
  account_type: string;
  salutation: null;
  fname: string;
  lname: string;
  language: null;
  employment_status: null;
  lead_source: null;
  gender: null;
  industry: null;
  occupation: null;
  cust_journey_stage: null;
  national_id: null;
  phone: number | undefined;
  mobile: number | undefined;
  billing_street: null;
  billing_city: null;
  billing_state: null;
  billing_zip_code: null;
  billing_country: null;
  account_name: string;
  parent_account: null;
  company_fleet_size: null;
  website: null;
  account_owner: null;
  corporate_program_code: null;
  type: null;
  annual_revenue: null;
  email: string;
  household_income: null;
  birthdate: null;
  dealer_code: number | null;
  marital_status: null;
  children: null;
  no_of_people: null;
  dealer_id: string;

  constructor() {
    this.dealer_code = 0;
    this.dealer_id = '';
    this.account_id = '';
    this.account_type = '';
    this.salutation = null;
    this.fname = '';
    this.lname = '';
    this.language = null;
    this.employment_status = null;
    this.lead_source = null;
    this.gender = null;
    this.industry = null;
    this.occupation = null;
    this.cust_journey_stage = null;
    this.national_id = null;
    this.phone = undefined;
    this.mobile = undefined;
    this.billing_street = null;
    this.billing_city = null;
    this.billing_state = null;
    this.billing_zip_code = null;
    this.billing_country = null;
    this.account_name = '';
    this.parent_account = null;
    this.company_fleet_size = null;
    this.website = null;
    this.account_owner = null;
    this.corporate_program_code = null;
    this.type = null;
    this.annual_revenue = null;
    this.email = '';
    this.household_income = null;
    this.birthdate = null;
    this.marital_status = null;
    this.children = null;
    this.no_of_people = null;
  }
}
// export interface customerList{
// account_id: this.customerObj.account_id || '',
//         account_type: this.customerObj.account_type || '',
//         fname: this.customerObj.fname || '',
//         lname: this.customerObj.lname || '',
//         email: this.customerObj.email || '',
//         phone: this.customerObj.phone || '',
//         mobile: this.customerObj.mobile || '',
//         dealer_code: this.customerObj.dealer_code || '', // Ensure only set once
//         dealer_id: this.customerObj.dealer_id || '',
// }
