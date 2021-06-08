import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.less'],
})
export class SocialsComponent implements OnInit {
  socials: Social[] = [
    { icon: 'tiktok', url: '@EllieJplanning' },
    { icon: 'facebook', url: 'www.facebook.com/EllieJordan43' },
    { icon: 'instagram', url: '@itsaplann' },
    { icon: 'twitch', url: '@itsaplann' },
    { icon: 'twitter', url: '@itsaplann' },
    { icon: 'website', url: 'www.EllieJordan.ca' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export class Social {
  icon: string = '';
  url: string = '';
}
