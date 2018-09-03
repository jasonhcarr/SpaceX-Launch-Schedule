import { Component, OnInit, Input } from '@angular/core';
import { ILaunch } from '../../../interfaces/launch';

@Component({
    selector: 'app-launch-row',
    templateUrl: './launch-row.component.html',
    styleUrls: ['./launch-row.component.css']
})
export class LaunchRowComponent implements OnInit {

    constructor() { }

    @Input() launch: ILaunch;
    link: string;

    ngOnInit () {
        const launch = this.launch;
        this.link = launch.links.presskit || launch.links.article_link || launch.links.wikipedia;
    }
}
