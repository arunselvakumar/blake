import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class HttpclientService {
    constructor(private httpService: HttpService) { }

    /*
    * Raise Http request to external service based on given url and params
    * urlFormat     -> formatted string of external service url -> http:\\url\{id}\get
    * params        -> key value pair for url params <id, idvalue>
    * queryparams   -> key value pair for url params <query, queryvalue> will be concatenated with final url.
    */
    get(
        urlFormat: string,
        params: { key: string, value: string }[], 
        queryparams: { key: string, value: string }[]) {
        if (params) {
            params.forEach(param => {
                var formattedParam = "{" + param.key + "}";
                if (urlFormat.indexOf(formattedParam) > 0) {
                    urlFormat = urlFormat.replace(formattedParam, param.value)
                }
                else {
                    throw new HttpException('Invalid Url', HttpStatus.BAD_REQUEST);
                }
            });
        }
        if (queryparams) {
            var queryParamArray = [];
            queryparams.forEach(qParam => {
                queryParamArray.push(qParam.key + "=" + qParam.value);
            });
            var qParams = queryParamArray.join("&");
            urlFormat = urlFormat + "?" + qParams;
        }

        return this.httpService.get(urlFormat);
    }
}
