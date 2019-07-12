import { Injectable } from '@nestjs/common';
import { CreateServiceRequestDto } from '../models/dtos/service/request/create-service.requrest.dto';
import { ServiceEntityModel } from '../models/entities/service.entity.model';

@Injectable()
export class ServicesMapper {
    public static mapFromCreateServiceRequestDtoToEntity(
        createServiceRequestDto: CreateServiceRequestDto): ServiceEntityModel {
        // @ts-ignore
        return {
            name: createServiceRequestDto.name,
            upTime: createServiceRequestDto.upTime,
            serviceableDistance: createServiceRequestDto.serviceableDistance,
            // location: { type: { type: 'Point', coordinates: { type: [-104.9903, 39.7392] } } },
            location: { type: 'Point', coordinates: [createServiceRequestDto.location.lat, createServiceRequestDto.location.long] },
        };
    }
}
