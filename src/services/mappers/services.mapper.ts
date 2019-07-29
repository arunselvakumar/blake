import { Injectable } from '@nestjs/common';
import { CreateServiceRequestDto } from '../models/dtos/service/request/create-service.requrest.dto';
import { UpdateServiceRequestDto } from '../models/dtos/service/request/update-service.request.dto';
import { CreateServiceResponseDto } from '../models/dtos/service/response/create-service.response.dto';
import { GetNearbyServiceResponseDto } from '../models/dtos/service/response/get-nearby-services.response.dto';
import { GetServicesResponseDto } from '../models/dtos/service/response/get-services.response.dto';
import { UpdateServiceResponseDto } from '../models/dtos/service/response/update-service.response.dto';
import { NearbyServiceEntityModel } from '../models/entities/nearby-service.entity.model';
import { ServiceCategoryEntityModel } from '../models/entities/service-category.entity.model';
import { ServiceEntityModel } from '../models/entities/service.entity.model';

export class ServicesMapper {
    public static mapFromCreateServiceRequestDtoToEntity(
        createServiceRequestDto: CreateServiceRequestDto): ServiceEntityModel {
        // @ts-ignore
        return {
            name: createServiceRequestDto.name,
            upTime: createServiceRequestDto.upTime,
            serviceableDistance: createServiceRequestDto.serviceableDistance,
            category: createServiceRequestDto.category,
            isArchived: false,
            isOffline: false,
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
            category: updateServiceRequestDto.category,
            isArchived: false,
            isOffline: false,
            location: { type: 'Point', coordinates: [updateServiceRequestDto.location.lat, updateServiceRequestDto.location.long] },
        };
    }

    public static mapCreateServiceResponseDtoFromEntity(
        serviceEntityModel: ServiceEntityModel): CreateServiceResponseDto {
        // @ts-ignore
        return {
            id: serviceEntityModel._id,
            name: serviceEntityModel.name,
            upTime: serviceEntityModel.upTime,
            serviceableDistance: serviceEntityModel.serviceableDistance,
            category: serviceEntityModel.category,
            isArchived: serviceEntityModel.isArchived,
            isOffline: serviceEntityModel.isOffline,
            location: {
                lat: serviceEntityModel.location.coordinates[0],
                long: serviceEntityModel.location.coordinates[1],
            },
        };
    }

    public static mapUpdateServiceResponseDtoFromEntity(
        serviceEntityModel: ServiceEntityModel): UpdateServiceResponseDto {
        // @ts-ignore
        return {
            id: serviceEntityModel._id,
            name: serviceEntityModel.name,
            upTime: serviceEntityModel.upTime,
            serviceableDistance: serviceEntityModel.serviceableDistance,
            category: serviceEntityModel.category,
            isArchived: serviceEntityModel.isArchived,
            isOffline: serviceEntityModel.isOffline,
            location: {
                lat: serviceEntityModel.location.coordinates[0],
                long: serviceEntityModel.location.coordinates[1],
            },
        };
    }

    public static mapGetServiceResponseFromEntity(
        serviceEntityModel: ServiceCategoryEntityModel): GetServicesResponseDto {
        // @ts-ignore
        return {
            id: serviceEntityModel._id,
            name: serviceEntityModel.name,
            upTime: serviceEntityModel.upTime,
            serviceableDistance: serviceEntityModel.serviceableDistance,
            category: {
                id: serviceEntityModel.category.id,
                name: serviceEntityModel.category.name,
                description: serviceEntityModel.category.description,
            },
            isArchived: serviceEntityModel.isArchived,
            isOffline: serviceEntityModel.isOffline,
            location: {
                lat: serviceEntityModel.location.coordinates[0],
                long: serviceEntityModel.location.coordinates[1],
            },
        };
    }

    public static mapGetNearByServiceResponseFromEntity(
        serviceEntityModel: NearbyServiceEntityModel): GetNearbyServiceResponseDto {
        // @ts-ignore
        return {
            id: serviceEntityModel._id,
            name: serviceEntityModel.name,
            upTime: serviceEntityModel.upTime,
            isOffline: serviceEntityModel.isOffline,
            isArchived: serviceEntityModel.isArchived,
            distance: serviceEntityModel.dist.calculated,
            serviceableDistance: serviceEntityModel.serviceableDistance,
            category: {
                id: serviceEntityModel.Category._id,
                name: serviceEntityModel.Category.name,
                description: serviceEntityModel.Category.description,
            },
            location: {
                lat: serviceEntityModel.location.coordinates[0],
                long: serviceEntityModel.location.coordinates[1],
            },
        };
    }
}
