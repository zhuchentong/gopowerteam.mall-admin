/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import type { Observable } from 'rxjs'
import { AppController } from '~/http/controllers/app.controller'
import { TokenResponse } from '~/http/model'

export class AppService {
  /**
   * 系统初始化
   */
  @Request({
    server: AppController.appInit,
  })
  public appInit(
    params?: RequestParams | { [key: string]: any },
  ): Observable<any> {
    return RequestParams.create(params).request()
  }
  /**
   * 获取系统基本信息
   */
  @Request({
    server: AppController.appBase,
  })
  public appBase(
    params?: RequestParams | { [key: string]: any },
  ): Observable<any> {
    return RequestParams.create(params).request()
  }
  /**
   * 管理员登录
   */
  @Request({
    server: AppController.login,
    model: TokenResponse,
  })
  public login(
    params?: RequestParams | { [key: string]: any },
  ): Observable<TokenResponse> {
    return RequestParams.create(params).request()
  }
  /**
   * 刷新Token
   */
  @Request({
    server: AppController.token,
    model: TokenResponse,
  })
  public token(
    params?: RequestParams | { [key: string]: any },
  ): Observable<TokenResponse> {
    return RequestParams.create(params).request()
  }
  /**
   * 获取当前用户信息
   */
  @Request({
    server: AppController.getCurrentUser,
  })
  public getCurrentUser(
    params?: RequestParams | { [key: string]: any },
  ): Observable<any> {
    return RequestParams.create(params).request()
  }
}
