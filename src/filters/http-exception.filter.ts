import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    console.log(exception.getResponse().message)

    if(exception.getStatus() == 400){
        console.log(' in exception check')
      response
          .status(status)
          .json({
            statusCode: status,
            description: "test",
            data: {
              message : exception.getResponse().message.join(' and ')
            }
          });
    } else
      response
          .status(status)
          .json({
            statusCode: status,
            description: "description test",
            data: {
              message : exception.getResponse()['message']
            }
          });

      // { "status": {
      //     "code": 1899,
      //         "header": "Unable to proceed",
      //     "description": "Sorry, information not available." },
      //     "data": null
      // }
  }
}
