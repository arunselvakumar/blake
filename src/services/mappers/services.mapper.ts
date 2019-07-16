import { Injectable } from '@nestjs/common';
import { CreateServiceRequestDto } from '../models/dtos/service/request/create-service.requrest.dto';
import { UpdateServiceRequestDto } from '../models/dtos/service/request/update-service.request.dto';
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
            categoryId : createServiceRequestDto.categoryId,
            isArchived: false,
            location: { type: 'Point', coordinates: [createServiceRequestDto.location.lat, createServiceRequestDto.location.long] },
        };
    }

    public static mapFromUpdateServiceRequestDtoToEntity(
        updateServiceRequestDto: UpdateServiceRequestDto): ServiceEntityModel {
        // @ts-ignore
        return {
            name: updateServiceRequestDto.name,
            upTime: updateServiceRequestDto.upTime,
            serviceableDistance: updateServiceRequestDto.serviceableDistance,
            categoryId : updateServiceRequestDto.categoryId,
            isArchived: false,
            location: { type: 'Point', coordinates: [updateServiceRequestDto.location.lat, updateServiceRequestDto.location.long] },
        };
    }
}
