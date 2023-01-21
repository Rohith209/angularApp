import { Component } from '@angular/core';
import { TdfService } from '../tdf.service';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
})
export class TdfComponent {
  states = [
    {
      slno: 0,
      abb: 'AN',
      name: 'Andaman and Nicobar Islands',
      state: 'andaman-and-nicobar',
    },
    {
      slno: 1,
      abb: 'AP',
      name: 'Andhra Pradesh',
      state: 'andhra-pradesh',
    },
    {
      slno: 2,
      abb: 'AR',
      name: 'Arunachal Pradesh',
      state: 'arunachal-pradesh',
    },
    {
      slno: 3,
      abb: 'AS',
      name: 'Assam',
      state: 'assam',
    },
    {
      slno: 4,
      abb: 'BR',
      name: 'Bihar',
      state: 'bihar',
    },
    {
      slno: 5,
      abb: 'CG',
      name: 'Chandigarh',
      state: 'chandigarh',
    },
    {
      slno: 6,
      abb: 'CH',
      name: 'Chhattisgarh',
      state: 'chattishgarh',
    },
    {
      slno: 7,
      abb: 'DH',
      name: 'Dadra and Nagar Haveli',
      state: 'dadra-and-nagar',
    },
    {
      slno: 8,
      abb: 'DD',
      name: 'Daman and Diu',
      state: 'daman-and-diu',
    },
    {
      slno: 9,
      abb: 'DL',
      name: 'Delhi',
      state: 'delhi',
    },
    {
      slno: 10,
      abb: 'GA',
      name: 'Goa',
      state: 'goa',
    },
    {
      slno: 11,
      abb: 'GJ',
      name: 'Gujarat',
      state: 'gujrat',
    },
    {
      slno: 12,
      abb: 'HR',
      name: 'Haryana',
      state: 'haryana',
    },
    {
      slno: 13,
      abb: 'HP',
      name: 'Himachal Pradesh',
      state: 'himachal-pradesh',
    },
    {
      slno: 14,
      abb: 'JK',
      name: 'Jammu and Kashmir',
      state: 'jammu-and-kashmir',
    },
    {
      slno: 15,
      abb: 'JH',
      name: 'Jharkhand',
      state: 'jharkhand',
    },
    {
      slno: 16,
      abb: 'KA',
      name: 'Karnataka',
      state: 'karnataka',
    },
    {
      slno: 17,
      abb: 'KL',
      name: 'Kerala',
      state: 'kerala',
    },
    {
      slno: 18,
      abb: 'LD',
      name: 'Lakshadweep',
      state: 'lakshadweep',
    },
    {
      slno: 19,
      abb: 'MP',
      name: 'Madhya Pradesh',
      state: 'madhya-pradesh',
    },
    {
      slno: 20,
      abb: 'MH',
      name: 'Maharashtra',
      state: 'maharashtra',
    },
    {
      slno: 21,
      abb: 'MN',
      name: 'Manipur',
      state: 'manipur',
    },
    {
      slno: 22,
      abb: 'ML',
      name: 'Meghalaya',
      state: 'meghalaya',
    },
    {
      slno: 23,
      abb: 'MZ',
      name: 'Mizoram',
      state: 'mizoram',
    },
    {
      slno: 24,
      abb: 'NL',
      name: 'Nagaland',
      state: 'nagaland',
    },
    {
      slno: 25,
      abb: 'OR',
      name: 'Odisha',
      state: 'odhisha',
    },
    {
      slno: 26,
      abb: 'PY',
      name: 'Puducherry',
      state: 'puducherry',
    },
    {
      slno: 27,
      abb: 'PB',
      name: 'Punjab',
      state: 'punjab',
    },
    {
      slno: 28,
      abb: 'RJ',
      name: 'Rajasthan',
      state: 'rajasthan',
    },
    {
      slno: 29,
      abb: 'SK',
      name: 'Sikkim',
      state: 'sikkim',
    },
    {
      slno: 30,
      abb: 'TN',
      name: 'Tamil Nadu',
      state: 'tamil-nadu',
    },
    {
      slno: 31,
      abb: 'TS',
      name: 'Telangana',
      state: 'telangana',
    },
    {
      slno: 32,
      abb: 'TR',
      name: 'Tripura',
      state: 'tripura',
    },
    {
      slno: 33,
      abb: 'UK',
      name: 'Uttar Pradesh',
      state: 'uttar-pradesh',
    },
    {
      slno: 34,
      abb: 'UP',
      name: 'Uttarakhand',
      state: 'uttarakhand',
    },
    {
      slno: 35,
      abb: 'WB',
      name: 'West Bengal',
      state: 'west-bengal',
    },
  ];

  model = new User('', '', '', '', '', '', '', '', '', false);

  checkBoxStatus = true;

  isCheckboxChecked(val: Boolean) {
    if (val == true) {
      this.checkBoxStatus = true;
    } else {
      this.checkBoxStatus = false;
    }
  }

  SubmitForm(data: any) {
    console.table(data.value);
    alert('Signup Successful');
  }
}
