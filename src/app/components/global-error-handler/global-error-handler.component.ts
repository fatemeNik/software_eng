import { HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, Injector, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorService } from 'src/app/services/error.service';
// import { ErrorService } from './services/error.service';

@Component({
  selector: 'app-global-error-handler',
  templateUrl: './global-error-handler.component.html',
  styleUrls: ['./global-error-handler.component.scss']
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector, public snackBar: MatSnackBar) { }

  handleError(error: Error | HttpErrorResponse)
    {
        const errorService = this.injector.get(ErrorService);
        let message;
        let stackTrace = errorService.getClientStack(error);

        if (error instanceof HttpErrorResponse) // Server Error
            message = errorService.getServerMessage(error);
        else // Client Error
            message = errorService.getClientMessage(error);

        this.snackBar.open(message, 'X', { panelClass: ['error'] });
    }
    
 
}
