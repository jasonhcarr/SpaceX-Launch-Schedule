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

    /* 
     * Static list of data returned by the launch service.
     * By default, this list is ordered from oldest to most recent launch.
     */
    allLaunches: ILaunch[];

    /* Sorted and/or filtered list of launches */
    displayLaunches: ILaunch[][] = [];

    /* Limits the number of launches displayed on a single page. */
    rowsPerPage: number = 12;

    /* The set of launch rows currently being displayed */
    currentIndex: number = 0;

    /**
     * Receives an event from the launch-footer component to change the 'page'/index being displayed.
     * @param {Event} $event the index to be displayed -- this is one less than the page number
     */
    receiveIndex = ($event: number) => {
        this.currentIndex = $event;
    }
    /**
     * Sorts the launch array based on the passed property value.
     * @param {string} field the key on which to sort
     */
    sortTable = (field: string) => {
        const ascending = this.ascending = !this.ascending;
        this.allLaunches.sort(
            (a, b) => {
                if (this.ascending) return a[field] - b[field];
                else return b[field] - a[field];
            });
        this.paginate();
    };

    /**
     * Converts the flat allLaunches array into an array of arrays.
     * The length of the internal arrays is defined by the rowsPerPage property.
     */
    paginate = () => {
        const { displayLaunches, allLaunches, rowsPerPage } = this;
        for (var i = 0; i < allLaunches.length; i++) {
            if (i % rowsPerPage === 0) {
                displayLaunches[Math.floor(i / rowsPerPage)] = [allLaunches[i]];
            } else {
                displayLaunches[Math.floor(i / rowsPerPage)].push(allLaunches[i]);
            }
        }
    };

    /**
     * Subscribes to the launch service and receives and array of launch data. 
     */
    ngOnInit () {
        this.launchService.getLaunches()
            .subscribe((data: ILaunch[]) => {
                this.allLaunches = data;
                this.paginate();
            });
    }
}
