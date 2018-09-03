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

    /* Boolean flag for sorting purposes */
    ascending: boolean = true;

    /* Static list of data returned by the launch service.
     * By default, this list is ordered from oldest to most recent launch.
     */
    allLaunches: ILaunch[];

    /* Sorted and/or filtered list of launches */
    displayLaunches: ILaunch[];

    /**
     * Sorts the launch array based on the passed property value.
     * allLaunches is sorted in ascending order by default.
     * For performance reasons, rather than resorting it can be the default when the ascending list is requested.
     * If this were not the case, the 'sort' callback could written:
     * @example
     * (a, b) => {
     *      if (this.ascending) return a[field] - b[field];
     *      else return b[field] - a[field]
     * }
     * @param {string} field the key on which to sort
     */
    sortTable = (field: string) => {
        this.ascending = !this.ascending;
        /* 
         */
        this.displayLaunches = this.ascending
            ? this.allLaunches
            // spread operator prevents object mutation
            : [...this.allLaunches].sort(
                (a, b) => b[field] - a[field]);
    };

    /**
     * Subscribes to the launch service and receives and array of launch data. 
     */
    ngOnInit () {
        this.launchService.getLaunches()
            .subscribe((data: ILaunch[]) =>
                this.allLaunches = this.displayLaunches = data)
    }

}
