import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../../services/launch.service';
import { ILaunch } from '../../../interfaces/launch';
@Component({
    selector: 'app-launch-table',
    templateUrl: './launch-table.component.html',
    styleUrls: ['./launch-table.component.css']
})
export class LaunchTableComponent implements OnInit {

    constructor(private launchService: LaunchService) { }

    allLaunches: ILaunch[];
    displayLaunches: ILaunch[];

    ngOnInit () {
        this.launchService.getLaunches()
            .subscribe((data: ILaunch[]) =>
                this.allLaunches = this.displayLaunches = data)
    }

}
